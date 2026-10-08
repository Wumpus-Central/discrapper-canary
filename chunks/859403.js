n.d(t, { Do: () => g, Ki: () => m, Re: () => p, c_: () => A, kM: () => T, kb: () => f, vh: () => h, xP: () => I });
var i = n(477900),
    r = n(873298),
    a = n(376357),
    s = n(192308),
    l = n(157559),
    o = n(793574),
    d = n(113367),
    c = n(625494),
    u = n(566908),
    _ = n(652215),
    E = n(660183);
function A(e) {
    let t = E.intl.formatToPlainString(E.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, d.Dc)({ message: t, icon: a.Ck.CLOCK });
}
function h(e) {
    if (e.body?.code !== _.t02.TOO_MANY_SCHEDULED_MESSAGES) {
        var t;
        return void ((t = e.body?.message ?? e.message),
        (0, a.P0)((0, a.ox)(E.intl.formatToPlainString(E.t.PsJmUe, { error: t }), a.Ck.FAILURE)));
    }
    let { limit: d, isUpgradable: A } = (0, u.ZG)("ScheduledMessagesCreateRoadblock");
    A
        ? (0, s.openModalLazy)(async () => {
              let { default: e } = await Promise.all([
                  n.e("454048"),
                  n.e("300699"),
                  n.e("536200"),
                  n.e("183776"),
                  n.e("428296"),
                  n.e("534822"),
                  n.e("178930"),
              ]).then(n.bind(n, 471177));
              return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: [o.A.SCHEDULED_MESSAGES_ROADBLOCK] });
          })
        : l.A.show({
              title: E.intl.string(E.t.RLdUVh),
              body: E.intl.formatToPlainString(E.t["3AMt7r"], { max: d }),
              cancelText: E.intl.string(E.t.BddRzS),
              confirmText: E.intl.string(E.t.lv6bDa),
              onConfirm: () => c._.dispatch(_.jej.TOGGLE_INBOX, r.Y2.SCHEDULED),
          });
}
function f() {
    (0, d.Dc)({ message: E.intl.string(E.t.MXsMRk), icon: a.Ck.CLOCK });
}
function I(e) {
    (0, a.P0)((0, a.ox)(E.intl.formatToPlainString(E.t.slM6In, { error: e }), a.Ck.FAILURE));
}
function p() {
    (0, d.Dc)({ message: E.intl.string(E.t["JF/LWn"]), icon: a.Ck.CLOCK });
}
function T(e) {
    (0, a.P0)((0, a.ox)(E.intl.formatToPlainString(E.t.sUvyW3, { error: e }), a.Ck.FAILURE));
}
function m() {
    (0, d.Dc)({ message: E.intl.string(E.t["BHCm/d"]), icon: a.Ck.CLOCK });
}
function g(e) {
    (0, a.P0)((0, a.ox)(E.intl.formatToPlainString(E.t["uy++C+"], { error: e }), a.Ck.FAILURE));
}
