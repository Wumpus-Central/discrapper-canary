"use strict";
n.d(t, { A: () => g });
var r = n(562465),
    i = n(439372),
    s = n(924985),
    a = n(734057),
    o = n(927813),
    l = n(652215);
let u = {},
    d = 0,
    c = 15 * o.A.Millis.SECOND;
function _() {
    u = { ...s.A.getCollapsedCategories() };
}
function f() {
    __OVERLAY__ || (clearTimeout(d), (d = setTimeout(() => h({}), c)));
}
async function E(e, t) {
    null == e || e === l.ME
        ? await r.Bo.patch({ url: l.Rsh.USER_GUILD_SETTINGS(l.ME), body: t, rejectWithError: !1 })
        : await h(null != t ? { [e ?? l.ME]: t } : {});
}
async function h(e) {
    clearTimeout(d);
    let t = 0 !== Object.keys(e).length,
        n = s.A.getCollapsedCategories(),
        i = (function () {
            let e = {},
                t = s.A.getCollapsedCategories();
            for (let n in t) t[n] !== u[n] && (e[n] = !0);
            for (let n in u) t[n] !== u[n] && (e[n] = !0);
            return e;
        })();
    for (let r in i) {
        let i = a.A.getChannel(r);
        null != i &&
            null != i.guild_id &&
            (i.guild_id in e || (e[i.guild_id] = {}),
            null == e[i.guild_id].channel_overrides && (e[i.guild_id].channel_overrides = {}),
            (e[i.guild_id].channel_overrides[i.id] = {
                ...e[i.guild_id].channel_overrides[i.id],
                collapsed: i.id in n,
            }),
            (t = !0));
    }
    return t
        ? ((u = { ...n }),
          delete e[l.YYv],
          (await r.Bo.patch({ url: l.Rsh.USER_GUILD_SETTINGS_BULK, body: { guilds: e }, rejectWithError: !1 })).body)
        : [];
}
function p() {
    u = { ...s.A.getCollapsedCategories() };
}
class m extends i.A {
    actions = {
        CATEGORY_COLLAPSE: f,
        CATEGORY_EXPAND: f,
        CATEGORY_COLLAPSE_ALL: f,
        CATEGORY_EXPAND_ALL: f,
        POST_CONNECTION_OPEN: _,
        USER_GUILD_SETTINGS_FULL_UPDATE: p,
    };
    saveUserGuildSettings = E;
    saveUserGuildSettingsBulk = h;
}
let g = new m();
