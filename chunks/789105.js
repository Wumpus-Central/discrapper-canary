n.d(t, { A: () => m });
var i = n(439372),
    r = n(280450),
    a = n(16236),
    s = n(117600),
    l = n(5180),
    o = n(652215);
function d(e) {
    let {
        channel: { id: t },
    } = e;
    (0, a.i_)(t, { trackAnalytics: !1 });
}
function c(e) {
    let { id: t } = e;
    (0, a._2)(!0, t);
}
function u(e) {
    let { id: t } = e;
    (0, a._2)(!1, t);
}
function _(e) {
    let { guildId: t } = e;
    (0, l.ai)(t) && (0, a._2)(!0);
}
function E(e) {
    let { guildId: t } = e;
    (0, l.ai)(t) && (0, a._2)(!1);
}
function A() {
    (0, s.CU)(s.E9);
}
function h(e) {
    return null != e && Date.now() - new Date(e).getTime() < 6e4;
}
function I(e) {
    let { id: t, addedMembers: n } = e,
        i = r.default.getId();
    null == i || null == n || (n.some((e) => e.userId === i) && (0, a.Ye)(t).catch(o.tEg));
}
function f(e) {
    let { channel: t } = e;
    t?.member != null && h(t.member.joinTimestamp) && (0, a.Ye)(t.id).catch(o.tEg);
}
function p(e) {
    let { id: t, userId: n, joinTimestamp: i } = e;
    r.default.getId() === n && h(i) && (0, a.Ye)(t).catch(o.tEg);
}
class T extends i.A {
    actions = {
        CHANNEL_DELETE: d,
        CATEGORY_COLLAPSE: c,
        CATEGORY_EXPAND: u,
        CATEGORY_COLLAPSE_ALL: _,
        CATEGORY_EXPAND_ALL: E,
        LOGOUT: A,
        THREAD_CREATE: f,
        THREAD_MEMBERS_UPDATE: I,
        THREAD_MEMBER_UPDATE: p,
    };
}
let m = new T();
