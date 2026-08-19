"use strict";
n.d(t, { A: () => p });
var i = n(636537),
    r = n(439372),
    a = n(924985),
    s = n(734057),
    l = n(927813),
    o = n(652215);
let d = {},
    c = 0,
    u = 15 * l.A.Millis.SECOND;
function _() {
    d = { ...a.A.getCollapsedCategories() };
}
function E() {
    __OVERLAY__ || (clearTimeout(c), (c = setTimeout(() => h({}), u)));
}
async function A(e, t) {
    null == e || e === o.ME
        ? await i.Bo.patch({ url: o.Rsh.USER_GUILD_SETTINGS(o.ME), body: t, rejectWithError: !1 })
        : await h(null != t ? { [e ?? o.ME]: t } : {});
}
async function h(e) {
    clearTimeout(c);
    let t = 0 !== Object.keys(e).length,
        n = a.A.getCollapsedCategories(),
        r = (function () {
            let e = {},
                t = a.A.getCollapsedCategories();
            for (let n in t) t[n] !== d[n] && (e[n] = !0);
            for (let n in d) t[n] !== d[n] && (e[n] = !0);
            return e;
        })();
    for (let i in r) {
        let r = s.A.getChannel(i);
        null != r &&
            null != r.guild_id &&
            (r.guild_id in e || (e[r.guild_id] = {}),
            null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}),
            (e[r.guild_id].channel_overrides[r.id] = {
                ...e[r.guild_id].channel_overrides[r.id],
                collapsed: r.id in n,
            }),
            (t = !0));
    }
    return t
        ? ((d = { ...n }),
          delete e[o.YYv],
          (await i.Bo.patch({ url: o.Rsh.USER_GUILD_SETTINGS_BULK, body: { guilds: e }, rejectWithError: !1 })).body)
        : [];
}
function I() {
    d = { ...a.A.getCollapsedCategories() };
}
class f extends r.A {
    actions = {
        CATEGORY_COLLAPSE: E,
        CATEGORY_EXPAND: E,
        CATEGORY_COLLAPSE_ALL: E,
        CATEGORY_EXPAND_ALL: E,
        POST_CONNECTION_OPEN: _,
        USER_GUILD_SETTINGS_FULL_UPDATE: I,
    };
    saveUserGuildSettings = A;
    saveUserGuildSettingsBulk = h;
}
let p = new f();
