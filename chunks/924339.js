r.r(t), r.d(t, { default: () => _ }), r(411104), r(301563);
var n = r(200651);
r(192379);
var o = r(512722),
    a = r.n(o),
    l = r(593473),
    i = r(186231),
    c = r(159277),
    u = r(478677),
    s = r(457330),
    d = r(702493),
    p = r(77987),
    O = r(275759),
    f = r(710845),
    b = r(807675),
    y = r(69580),
    v = r(787025),
    w = r(591759),
    h = r(981631),
    P = r(602091);
let A = new f.Z('LinkAuthorize');
async function I(e, t, r, n) {
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
        let { state: e } = (0, O.xp)(p);
        a()(null != e, 'Authorize URL state query parameter must be present'), (f = e);
    } catch (e) {
        throw Error('error at authorize parsing callback params');
    }
    try {
        let o = await s.Z.completeTwoWayLink(n, e, t, f, r);
        return null == o ? void 0 : null === (i = o.body) || void 0 === i ? void 0 : i.redirect;
    } catch (e) {
        throw Error('error at callback with code '.concat(null !== (d = null == e ? void 0 : null === (c = e.body) || void 0 === c ? void 0 : c.code) && void 0 !== d ? d : 0));
    }
}
function T(e) {
    var t, r;
    let { platformType: o } = e;
    (0, d.Z)();
    let a = (0, b.y)(window.location.search),
        { code: c, token_redirect_uri: u } = l.parse(window.location.search),
        s = async (e) => {
            let { location: t } = e;
            if (null == t) return;
            let { error: r } = l.parse(t),
                n = null;
            if (null == r && null != c)
                try {
                    n = await I(t, c, u, o);
                } catch (r) {
                    var a;
                    A.error('Error Creating Discord link', null == r ? void 0 : r.message);
                    let e = w.Z.toURLSafe(t);
                    if (null == e) return;
                    e.searchParams.delete('code'), e.searchParams.set('error', 'two_way_link_error'), e.searchParams.set('error_description', null !== (a = null == r ? void 0 : r.message) && void 0 !== a ? a : 'unknown_error'), (t = e.toString());
                }
            window.location = null == n || n === i.b.OAUTH_REDIRECT ? t : n;
        };
    return (0, n.jsx)(v.G, {
        removeChildWrapper: !0,
        children: (0, n.jsx)(
            y.OAuth2AuthorizeModal,
            ((t = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (n = n.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        n.forEach(function (t) {
                            var n;
                            (n = r[t]),
                                t in e
                                    ? Object.defineProperty(e, t, {
                                          value: n,
                                          enumerable: !0,
                                          configurable: !0,
                                          writable: !0
                                      })
                                    : (e[t] = n);
                        });
                }
                return e;
            })({ transitionState: P.Dv.ENTERED }, a)),
            (r = r =
                {
                    showLogout: !0,
                    callback: s
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(r)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                  }),
            t)
        )
    });
}
let _ = (0, p.e)(function (e) {
    let { match: t } = e,
        r = t.params.type,
        { client_id: o = '' } = l.parse(window.location.search),
        a = r === h.ABu.PLAYSTATION && o === c.t.PLAYSTATION_APPLICATION_ID,
        i = r === h.ABu.PLAYSTATION_STAGING && o === c.t.PLAYSTATION_STAGING_APPLICATION_ID;
    return a || i ? (0, n.jsx)(T, { platformType: r }) : null;
});
