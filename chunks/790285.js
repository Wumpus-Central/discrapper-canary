r.d(n, {
    MT: function () {
        return o;
    },
    TG: function () {
        return l;
    },
    wB: function () {
        return s;
    }
});
var i = r(149765),
    a = r(981631);
function o(e) {
    return i.e$(e.permissions, a.Plq.VIEW_CHANNEL);
}
function s(e, n) {
    return null != n && (!!i.e$(n.deny, a.Plq.VIEW_CHANNEL) || (e.isGuildVocal() && i.e$(n.deny, a.Plq.CONNECT)));
}
function l(e, n) {
    return !(null == n || s(e, n)) && !!i.e$(n.allow, a.Plq.VIEW_CHANNEL) && (!e.isGuildVocal() || i.e$(n.allow, a.Plq.CONNECT));
}
