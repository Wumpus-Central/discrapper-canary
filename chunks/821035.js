n.d(t, { P: () => O }), n(290780);
var r = n(54381);
n(473749);
var i = n(524437),
    a = n(168107),
    o = n(480916),
    s = n(247206),
    l = n(656577),
    c = n(294602),
    u = n(666515),
    d = n(915009),
    f = n(880257),
    p = n(400313),
    _ = n(947707),
    m = n(526761),
    h = n(726985),
    g = n(388032),
    E = n(744038);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O() {
    var e;
    let t = null == (e = (0, f.Z)()) || e,
        n = (0, d.LN)(),
        b = (0, u.r)(),
        { explicitContentGuilds: O, explicitContentFriendDm: v, explicitContentNonFriendDm: S } = (0, c.B)(),
        I = (e) => {
            let t = Object.values(e);
            if ((0, s.Ks)() && t.includes(i.Q4.SHOW))
                return void a.Z.showAgeVerificationGetStartedModal({
                    entryPoint: o.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, l.zj)(e);
        },
        T = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49Uad),
            },
            {
                value: i.Q4.BLOCK,
                label: g.intl.string(g.t["D/157Y"]),
            },
        ],
        A = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49Uad),
            },
        ],
        C = {
            value: i.Q4.SHOW,
            label: g.intl.string(g.t["5k5OFp"]),
        };
    t && (T.unshift(C), A.unshift(C));
    let N = {
        isDisabled: b,
        tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : void 0,
    };
    return (0, r.jsxs)(p.n, {
        setting: h.s6.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: m.FY.EXPLICIT_MEDIA_REDACTION_V2,
        description: g.intl.string(g.t.Wnojv1),
        children: [
            (0, r.jsx)(
                _.Z,
                y(
                    {
                        title: g.intl.string(g.t["+uI23H"]),
                        value: v,
                        onChange: (e) => I({ explicitContentFriendDm: e }),
                        options: T,
                    },
                    N,
                ),
            ),
            (0, r.jsx)(
                _.Z,
                y(
                    {
                        title: g.intl.string(g.t["Yh+HX1"]),
                        value: S,
                        onChange: (e) => I({ explicitContentNonFriendDm: e }),
                        options: T,
                    },
                    N,
                ),
            ),
            (0, r.jsx)(_.Z, {
                title: g.intl.string(g.t["FP+a42"]),
                value: O,
                onChange: (e) => I({ explicitContentGuilds: e }),
                isDisabled: !t || b,
                tooltipText: n ? g.intl.string(E.default["6Af/cw"]) : void 0,
                options: A,
            }),
        ],
    });
}
