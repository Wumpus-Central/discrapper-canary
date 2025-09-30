n.d(t, { P: () => E }), n(290780);
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
    g = n(388032);
function E() {
    var e;
    let t = null == (e = (0, f.Z)()) || e,
        n = (0, d.LN)(),
        { explicitContentGuilds: E, explicitContentFriendDm: b, explicitContentNonFriendDm: y } = (0, u.B)(),
        O = (e) => {
            let t = Object.values(e);
            if ((0, l.Ks)() && t.includes(i.Q4.SHOW))
                return void o.Z.showAgeVerificationGetStartedModal({
                    entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS,
                });
            (0, c.zj)(e);
        },
        v = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW),
            },
            {
                value: i.Q4.BLOCK,
                label: g.intl.string(g.t["D/157e"]),
            },
        ],
        I = [
            {
                value: i.Q4.BLUR,
                label: g.intl.string(g.t.S49UaW),
            },
        ],
        T = {
            value: i.Q4.SHOW,
            label: g.intl.string(g.t["5k5OFh"]),
        };
    return (
        t && (v.unshift(T), I.unshift(T)),
        (0, r.jsxs)(_.U, {
            setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
            scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
            children: [
                (0, r.jsx)(p.Z, {
                    title: g.intl.string(g.t["+uI23N"]),
                    value: b,
                    onChange: (e) => O({ explicitContentFriendDm: e }),
                    isDisabled: n,
                    options: v,
                }),
                (0, r.jsx)(p.Z, {
                    title: g.intl.string(g.t["Yh+HX1"]),
                    value: y,
                    onChange: (e) => O({ explicitContentNonFriendDm: e }),
                    isDisabled: n,
                    options: v,
                }),
                (0, r.jsx)(p.Z, {
                    title: g.intl.string(g.t["FP+a4+"]),
                    value: E,
                    onChange: (e) => O({ explicitContentGuilds: e }),
                    isDisabled: !t || n,
                    options: I,
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: g.intl.string(g.t.Wnojv7),
                }),
            ],
        })
    );
}
