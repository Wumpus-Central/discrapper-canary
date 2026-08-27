"use strict";
n.d(t, { Re: () => m, c_: () => I, kM: () => g, kb: () => p, vh: () => f, xP: () => T });
var i = n(477900),
    r = n(873298),
    a = n(97483),
    s = n(691540),
    l = n(857250),
    o = n(192308),
    d = n(157559),
    c = n(793574),
    u = n(113367),
    _ = n(625494),
    E = n(674470),
    A = n(652215),
    h = n(375708);
function I(e) {
    let t = h.intl.formatToPlainString(h.t["CvHu/j"], { timestamp: new Date(e).valueOf() });
    (0, u.Dc)({ message: t, icon: a.Ck.CLOCK });
}
function f(e) {
    if (e.body?.code !== A.t02.TOO_MANY_SCHEDULED_MESSAGES) {
        var t;
        return void ((t = e.body?.message ?? e.message),
        (0, s.P0)((0, l.o)(h.intl.formatToPlainString(h.t.PsJmUe, { error: t }), a.Ck.FAILURE)));
    }
    let { limit: u, isUpgradable: I } = (0, E.ZG)("ScheduledMessagesCreateRoadblock");
    I
        ? (0, o.openModalLazy)(async () => {
              let { default: e } = await Promise.all([n.e("454048"), n.e("300699"), n.e("967279"), n.e("13248")]).then(
                  n.bind(n, 689219),
              );
              return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: [c.A.SCHEDULED_MESSAGES_ROADBLOCK] });
          })
        : d.A.show({
              title: h.intl.string(h.t.RLdUVh),
              body: h.intl.formatToPlainString(h.t["3AMt7r"], { max: u }),
              cancelText: h.intl.string(h.t.BddRzS),
              confirmText: h.intl.string(h.t.lv6bDa),
              onConfirm: () => _._.dispatch(A.jej.TOGGLE_INBOX, r.Y2.SCHEDULED),
          });
}
function p() {
    (0, u.Dc)({ message: h.intl.string(h.t.MXsMRk), icon: a.Ck.CLOCK });
}
function T(e) {
    (0, s.P0)((0, l.o)(h.intl.formatToPlainString(h.t.slM6In, { error: e }), a.Ck.FAILURE));
}
function m() {
    (0, u.Dc)({ message: h.intl.string(h.t["JF/LWn"]), icon: a.Ck.CLOCK });
}
function g(e) {
    (0, s.P0)((0, l.o)(h.intl.formatToPlainString(h.t.sUvyW3, { error: e }), a.Ck.FAILURE));
}
