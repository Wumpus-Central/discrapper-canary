t.r(r), t.d(r, { default: () => A }), t(411104), t(301563);
var n = t(200651);
t(192379);
var o = t(512722),
    a = t.n(o),
    l = t(593473),
    i = t(186231),
    c = t(159277),
    u = t(478677),
    s = t(457330),
    d = t(702493),
    p = t(77987),
    b = t(275759),
    f = t(710845),
    y = t(807675),
    O = t(69580),
    h = t(787025),
    v = t(591759),
    w = t(981631),
    P = t(602091);
let g = new f.Z('LinkAuthorize');
async function j(e, r, t, n) {
    var o, l, i, c, d;
    let p = null;
    try {
        let { body: e } = await s.Z.authorize(n, { twoWayLinkType: u.g.WEB });
        p = e.url;
    } catch (e) {
        throw Error('error at authorize with code '.concat(null !== (l = null == e ? void 0 : null === (o = e.body) || void 0 === o ? void 0 : o.code) && void 0 !== l ? l : 0));
    }
    let f = null;
    try {
        a()(null != p, 'No URL in authorize response');
        let { state: e } = (0, b.xp)(p);
        a()(null != e, 'Authorize URL state query parameter must be present'), (f = e);
    } catch (e) {
        throw Error('error at authorize parsing callback params');
    }
    try {
        let o = await s.Z.completeTwoWayLink(n, e, r, f, t);
        return null == o ? void 0 : null === (i = o.body) || void 0 === i ? void 0 : i.redirect;
    } catch (e) {
        throw Error('error at callback with code '.concat(null !== (d = null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code) && void 0 !== d ? d : 0));
    }
}
function m(e) {
    var r, t;
    let { platformType: o } = e;
    (0, d.Z)();
    let a = (0, y.y)(window.location.search),
        { code: c, token_redirect_uri: u } = l.parse(window.location.search),
        s = async (e) => {
            let { location: r } = e;
            if (null == r) return;
            let { error: t } = l.parse(r),
                n = null;
            if (null == t && null != c)
                try {
                    n = await j(r, c, u, o);
                } catch (t) {
                    var a;
                    g.error('Error Creating Discord link', null == t ? void 0 : t.message);
                    let e = v.Z.toURLSafe(r);
                    if (null == e) return;
                    e.searchParams.delete('code'), e.searchParams.set('error', 'two_way_link_error'), e.searchParams.set('error_description', null !== (a = null == t ? void 0 : t.message) && void 0 !== a ? a : 'unknown_error'), (r = e.toString());
                }
            window.location = null == n || n === i.b.OAUTH_REDIRECT ? r : n;
        };
    return (0, n.jsx)(h.G, {
        removeChildWrapper: !0,
        children: (0, n.jsx)(
            O.OAuth2AuthorizeModal,
            ((r = (function (e) {
                for (var r = 1; r < arguments.length; r++) {
                    var t = null != arguments[r] ? arguments[r] : {},
                        n = Object.keys(t);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(t).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(t, e).enumerable;
                            })
                        )),
                        n.forEach(function (r) {
                            var n;
                            (n = t[r]),
                                r in e
                                    ? Object.defineProperty(e, r, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[r] = n);
                        });
                }
                return e;
            })({ transitionState: P.Dv.ENTERED }, a)),
            (t = t =
                {
                    showLogout: !0,
                    callback: s
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t))
                : (function (e, r) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          t.push.apply(t, n);
                      }
                      return t;
                  })(Object(t)).forEach(function (e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                  }),
            r)
        )
    });
}
let A = (0, p.e)(function (e) {
    let { match: r } = e,
        t = r.params.type,
        { client_id: o = '' } = l.parse(window.location.search),
        a = t === w.ABu.PLAYSTATION && o === c.t.PLAYSTATION_APPLICATION_ID,
        i = t === w.ABu.PLAYSTATION_STAGING && o === c.t.PLAYSTATION_STAGING_APPLICATION_ID;
    return a || i ? (0, n.jsx)(m, { platformType: t }) : null;
});
