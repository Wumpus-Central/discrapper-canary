n.d(t, {
    Jn: () => p,
    LO: () => f,
    kn: () => d,
});
var r = n(873298),
    i = n(731068),
    a = n(253932),
    s = n(930125),
    o = n(338717),
    l = n(632119),
    c = n(444802),
    u = n(652215),
    d = (function (e) {
        return (e.EXPLICIT = "explicit"), (e.GORE = "gore"), (e.SELF_HARM = "self_harm"), e;
    })({}),
    f = (function (e) {
        return (
            (e[(e.NONE = 0)] = "NONE"),
            (e[(e.EXPLICIT = 1)] = "EXPLICIT"),
            (e[(e.GORE = 2)] = "GORE"),
            (e[(e.SELF_HARM = 4)] = "SELF_HARM"),
            (e[(e.ALL = 7)] = "ALL"),
            e
        );
    })({});
let p = {
    explicit: {
        harmType: "explicit",
        obscureReason: o.Oc.EXPLICIT_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_EXPLICIT_MEDIA,
        embedFlag: u.iSj.CONTAINS_EXPLICIT_MEDIA,
        genericMediaFlag: i.IS.EXPLICIT,
        bitmask: 1,
        devSettingKey: "obscure_blur_effect_explicit_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.explicitContentSettings;
            return {
                [s.v.GUILD]: null == n ? void 0 : n.explicitContentGuilds,
                [s.v.FRIEND_DM]: null == n ? void 0 : n.explicitContentFriendDm,
                [s.v.NON_FRIEND_DM]: null == n ? void 0 : n.explicitContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let i =
                null != e
                    ? e
                    : {
                          [s.v.GUILD]: null == (t = a.Vd.getSetting()) ? void 0 : t.explicitContentGuilds,
                          [s.v.FRIEND_DM]: null == (n = a.Vd.getSetting()) ? void 0 : n.explicitContentFriendDm,
                          [s.v.NON_FRIEND_DM]: null == (r = a.Vd.getSetting()) ? void 0 : r.explicitContentNonFriendDm,
                      };
            return {
                [s.v.GUILD]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[s.v.GUILD],
                }),
                [s.v.FRIEND_DM]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[s.v.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0,
                }),
                [s.v.NON_FRIEND_DM]: (0, l.Ys)({
                    setting: null == i ? void 0 : i[s.v.NON_FRIEND_DM],
                    isDm: !0,
                }),
            };
        },
    },
    gore: {
        harmType: "gore",
        obscureReason: o.Oc.GORE_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_GORE_CONTENT,
        embedFlag: u.iSj.CONTAINS_GORE_CONTENT,
        genericMediaFlag: i.IS.GORE,
        bitmask: 2,
        devSettingKey: "obscure_blur_effect_gore_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.goreContentSettings;
            return {
                [s.v.GUILD]: null == n ? void 0 : n.goreContentGuilds,
                [s.v.FRIEND_DM]: null == n ? void 0 : n.goreContentFriendDm,
                [s.v.NON_FRIEND_DM]: null == n ? void 0 : n.goreContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: (e) => {
            var t, n, r;
            let i =
                null != e
                    ? e
                    : {
                          [s.v.GUILD]: null == (t = a.qN.getSetting()) ? void 0 : t.goreContentGuilds,
                          [s.v.FRIEND_DM]: null == (n = a.qN.getSetting()) ? void 0 : n.goreContentFriendDm,
                          [s.v.NON_FRIEND_DM]: null == (r = a.qN.getSetting()) ? void 0 : r.goreContentNonFriendDm,
                      };
            return {
                [s.v.GUILD]: (0, c.gC)({
                    setting: null == i ? void 0 : i[s.v.GUILD],
                }),
                [s.v.FRIEND_DM]: (0, c.gC)({
                    setting: null == i ? void 0 : i[s.v.FRIEND_DM],
                    isDm: !0,
                    isFriend: !0,
                }),
                [s.v.NON_FRIEND_DM]: (0, c.gC)({
                    setting: null == i ? void 0 : i[s.v.NON_FRIEND_DM],
                    isDm: !0,
                }),
            };
        },
    },
    self_harm: {
        harmType: "self_harm",
        obscureReason: o.Oc.SELF_HARM_CONTENT,
        attachmentFlag: u.sbO.CONTAINS_SELF_HARM_CONTENT,
        embedFlag: u.iSj.CONTAINS_SELF_HARM_CONTENT,
        genericMediaFlag: i.IS.SELF_HARM,
        bitmask: 4,
        devSettingKey: "obscure_blur_effect_self_harm_content_enabled",
        getProtoUserSettings: (e) => {
            var t;
            let n = null == e || null == (t = e.textAndImages) ? void 0 : t.selfHarmContentSettings;
            return {
                [s.v.GUILD]: null == n ? void 0 : n.selfHarmContentGuilds,
                [s.v.FRIEND_DM]: null == n ? void 0 : n.selfHarmContentFriendDm,
                [s.v.NON_FRIEND_DM]: null == n ? void 0 : n.selfHarmContentNonFriendDm,
            };
        },
        getUserSettingsWithDefaults: () => ({
            [s.v.GUILD]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [s.v.FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
            [s.v.NON_FRIEND_DM]: r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
        }),
    },
};
