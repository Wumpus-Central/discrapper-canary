a.d(t, {
    ES: () => f,
    qH: () => b,
}),
    a(388685),
    a(642613),
    a(539854);
var n = a(296009),
    r = a(224706),
    l = a(592183),
    i = a(224724),
    s = a(247397),
    o = a(925434),
    c = a(570911);
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
function m(e) {
    return e[Math.floor(Math.random() * e.length)];
}
function x() {
    var e, t;
    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Set(),
        n = c.J6.filter((e) => !a.has(e));
    return {
        applicationId: m(n.length > 0 ? n : c.J6),
        comment: Math.random() > 0.5 ? m(o.x) : void 0,
        tags:
            Math.random() > 0.3
                ? ((e = o.T),
                  (t = Math.floor(Math.random() * o.T.length) + 1),
                  [...e].sort(() => 0.5 - Math.random()).slice(0, t))
                : void 0,
    };
}
function p(e, t) {
    let a = { id: e };
    return e === n.l.FAVORITE_GAMES
        ? u(d({}, a), {
              type: n.l.FAVORITE_GAMES,
              game: t,
          })
        : u(d({}, a), {
              type: e,
              games: t,
          });
}
function h(e, t) {
    let a = e.filter((e) => e.type !== t.type);
    return [t, ...a].sort((e, t) => s.rR.indexOf(e.type) - s.rR.indexOf(t.type));
}
function b(e) {
    let t, a;
    if (i.Z.hasPendingChanges()) {
        var s;
        t = null != (s = i.Z.getPendingWidgets()) ? s : [];
    } else {
        let e = i.Z.getOverrideWidgets();
        t = null != e ? e : [];
    }
    let o = t.find((t) => t.type === e);
    a =
        null != o
            ? e === n.l.FAVORITE_GAMES
                ? x()
                : [...(o.games || []), x()]
            : e === n.l.FAVORITE_GAMES
              ? x()
              : [x()];
    let c = h(t, p(e, a));
    l.Z.setPendingWidgets(c);
    let d = [];
    e === n.l.FAVORITE_GAMES
        ? d.push(a.applicationId)
        : a.forEach((e) => {
              d.push(e.applicationId);
          }),
        r.Z.getDetectableGamesSupplemental(d);
}
function f(e, t) {
    var a, o;
    let c, d;
    if (i.Z.hasPendingChanges()) c = null != (a = i.Z.getPendingWidgets()) ? a : [];
    else {
        let e = i.Z.getOverrideWidgets();
        c = null != e ? e : [];
    }
    let u = c.find((t) => t.type === e),
        m = s.Xe[e];
    if (null != u) {
        if (e === n.l.FAVORITE_GAMES);
        else if (((null == (o = u.games) ? void 0 : o.length) || 0) >= m) return;
    }
    let x = { applicationId: t };
    d = null != u ? (e === n.l.FAVORITE_GAMES ? x : [...(u.games || []), x]) : e === n.l.FAVORITE_GAMES ? x : [x];
    let b = h(c, p(e, d));
    l.Z.setPendingWidgets(b), r.Z.getDetectableGamesSupplemental([t]);
}
