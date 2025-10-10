n.d(t, { P: () => O }), n(290780);
var r = n(951288);
n(647438);
var i = n(524437),
    a = n(481060),
    o = n(168107),
    s = n(480916),
    l = n(247206),
    c = n(656577),
    u = n(294602),
    d = n(915009),
    f = n(880257),
    _ = n(838436),
    p = n(947707),
    h = n(526761),
    m = n(726985),
    g = n(388032),
    E = n(345909);
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
        { explicitContentGuilds: b, explicitContentFriendDm: O, explicitContentNonFriendDm: v } = (0, u.B)(),
        I = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void o.Z.showAgeVerificationGetStartedModal({
                    entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, c.zj)(e);
        },
        T = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: g.intl.string(g.t["D/157e"]),
            },
        ],
        S = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW),
            },
        ],
        A = {
            value: i.Q4.SHOW,
            label: g.intl.string(g.t["5k5OFh"]),
        };
    t && (T.unshift(A), S.unshift(A));
    let C = {
        isDisabled: n,
        tooltipText: n ? g.intl.string(E.default["6Af/c3"]) : void 0,
    };
    return (0, r.jsxs)(_.U, {
        setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
        scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
        children: [
            (0, r.jsx)(
                p.Z,
                y(
                    {
                        title: g.intl.string(g.t["+uI23N"]),
                        value: O,
                        onChange: (e) => I({ explicitContentFriendDm: e }),
                        options: T,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(
                p.Z,
                y(
                    {
                        title: g.intl.string(g.t["Yh+HX1"]),
                        value: v,
                        onChange: (e) => I({ explicitContentNonFriendDm: e }),
                        options: T,
                    },
                    C,
                ),
            ),
            (0, r.jsx)(p.Z, {
                title: g.intl.string(g.t["FP+a4+"]),
                value: b,
                onChange: (e) => I({ explicitContentGuilds: e }),
                isDisabled: !t || n,
                tooltipText: n ? g.intl.string(E.default["6Af/c3"]) : void 0,
                options: S,
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: g.intl.string(g.t.Wnojv7),
            }),
        ],
    });
}
