r.d(t, {
    default: () => j,
}),
    r(896048),
    r(492834);
var n = r(627968),
    l = r(64700),
    i = r(158954),
    o = r(311907),
    a = r(846293),
    c = r(299091),
    s = r(509099),
    u = r(197654),
    p = r(365940),
    y = r(531461),
    f = r(71441),
    O = r(760322),
    b = r(330936),
    d = r(634580);

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
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

function j(e) {
    let { inviteCode: t } = e,
        r = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["inviteCode"]);
    l.useEffect(() => {
        s.A.hideHubUpsell();
    }, []);
    let [j, m] = l.useState(null != t);
    l.useEffect(() => {
        null != t && a.Ay.resolveInvite(t, "Hub").finally(() => m(!1));
    }, [t]);
    let h = (0, o.bG)([c.A], () => (null != t ? c.A.getInvite(t) : null)),
        [E, v] = l.useState([b.Di.VERIFY_EMAIL]),
        [I, S] = l.useState(""),
        [w, P] = l.useState(""),
        [A, _] = l.useState(void 0),
        [x, L] = l.useState([]),
        R = (e) => {
            v(E.concat(e).slice(-4));
        },
        C = E[E.length - 1];
    if (j) {
        var D, T;
        return (0, n.jsx)(
            i.dWK,
            ((D = g({}, r)),
            (T = T =
                {
                    children: (0, n.jsx)(i.y$y, {
                        className: d.u,
                    }),
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(T))
                : (function (e, t) {
                      var r = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          r.push.apply(r, n);
                      }
                      return r;
                  })(Object(T)).forEach(function (e) {
                      Object.defineProperty(D, e, Object.getOwnPropertyDescriptor(T, e));
                  }),
            D),
        );
    }
    switch (C) {
        case b.Di.VERIFY_EMAIL:
            return (0, n.jsx)(
                u.A,
                g(
                    {
                        setGuildsInfo: L,
                        setStep: R,
                        email: I,
                        setEmail: S,
                        setGuildId: _,
                        invite: h,
                    },
                    r,
                ),
            );
        case b.Di.SELECT_SCHOOL:
            return (0, n.jsx)(
                p.A,
                g(
                    {
                        guildsInfo: x,
                        setStep: R,
                        email: I,
                        setGuildId: _,
                    },
                    r,
                ),
            );
        case b.Di.SUBMIT_SCHOOL:
            return (0, n.jsx)(
                y.A,
                g(
                    {
                        onBack: () => {
                            E.length > 1 && v(E.slice(0, -1).slice(-4));
                        },
                        setStep: R,
                        email: I,
                        school: w,
                        setSchool: P,
                    },
                    r,
                ),
            );
        case b.Di.VERIFY_PIN:
            return (0, n.jsx)(
                f.A,
                g(
                    {
                        email: I,
                        guildId: A,
                    },
                    r,
                ),
            );
        case b.Di.EMAIL_WAITLIST:
            return (0, n.jsx)(
                O.A,
                g(
                    {
                        setStep: R,
                        school: w,
                    },
                    r,
                ),
            );
        default:
            return r.onClose(), null;
    }
}
