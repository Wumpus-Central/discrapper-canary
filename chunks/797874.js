n.d(t, { Z: () => I });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(239091),
    u = n(810568),
    d = n(168524),
    f = n(592125),
    _ = n(77498),
    p = n(768581),
    h = n(124072),
    m = n(457926),
    g = n(388032),
    E = n(350745);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = function (e) {
    var t;
    let { gameId: a, channelId: b } = e,
        O = (0, s.e7)([_.Z], () => _.Z.getDetectableGame(a)),
        I = (0, s.e7)([f.Z], () => f.Z.getChannel(b)),
        T = null != I ? I.getGuildId() : null,
        S =
            null != O
                ? (e) => {
                      (0, c.jW)(e, async () => {
                          let { default: e } = await n.e('51064').then(n.bind(n, 631861));
                          return (t) =>
                              (0, r.jsx)(
                                  e,
                                  v(y({}, t), {
                                      game: O,
                                      guildId: T
                                  })
                              );
                      });
                  }
                : void 0,
        A =
            null != O
                ? (0, r.jsx)('img', {
                      alt: '',
                      className: o()(E.icon, E.imageIcon),
                      src: p.ZP.getApplicationIconURL({
                          id: O.id,
                          icon: O.icon,
                          size: 32
                      })
                  })
                : null,
        N = (0, d.Z)(
            {
                location: 'ContentPopout',
                applicationId: null == O ? void 0 : O.id,
                source: u.m1.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: void 0
            },
            {}
        ),
        C = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('36427').then(n.bind(n, 196738));
                return (t) => (0, r.jsx)(e, y({}, t));
            });
        }, []),
        R = null != O ? '@game '.concat(O.name) : void 0;
    return (0, r.jsx)(l.DY3, {
        element: 'span',
        text: R,
        'aria-label': R,
        delay: 750,
        children: (0, r.jsxs)(h.Z, {
            onClick: null != O ? N : C,
            onContextMenu: S,
            children: [
                (0, r.jsx)(m.Z, { children: A }),
                (0, r.jsx)('span', {
                    className: E.name,
                    children: null != (t = null == O ? void 0 : O.name) ? t : g.intl.string(g.t['11pdXV'])
                })
            ]
        })
    });
};
